
import connectDB from '@/utils/connect';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import User from '@/models/useModels';

export async function POST(request) {
    try {
        await connectDB();
        const formData = await request.json();
        // console.log('formData', formData);
        // return false;

        // Validate email and password
        if (formData && formData.email && formData.password && formData.userName) {
            const findExists = await User.findOne({
                $or: [{ email: formData.email }]
            });

            if (findExists) {
                return NextResponse.json({
                    message: 'User already exists',
                }, { status: 500 });
            }

            const hashedPassword = await bcrypt.hash(formData.password, 10);
            await User.create({
                email: formData.email,
                password: hashedPassword,
                userName: formData.userName,
            });

            return NextResponse.json({
                message: 'Registration success'
            }, { status: 201 });
        } else {
            return NextResponse.json({
                message: 'Invalid form data',
            }, { status: 400 });
        }

    } catch (error) {
        console.error('Error in API endpoint:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
