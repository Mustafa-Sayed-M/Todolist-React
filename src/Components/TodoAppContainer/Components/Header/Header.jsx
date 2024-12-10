import React from 'react';
import { SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { currentDate, currentTime } from '../../../../Utils/handlers';

const Header = React.memo(() => {
    const { user } = useUser();
    const [time, setTime] = React.useState(currentTime());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(currentTime());
        }, 1000);

        return () => clearInterval(interval); // تنظيف الـ interval
    }, []);

    return (
        <div className='header'>
            <div className='flex items-center justify-between'>
                {user ? (
                    <>
                        {/* User Info */}
                        <div className='user-info space-y-1'>
                            {/* Name */}
                            <h2 className='font-medium text-lg text-[#cb00ed]'>Hey, {user.fullName}</h2>
                            {/* Time Container */}
                            <div className='time-container flex items-center text-sm gap-1 opacity-80'>
                                {/* Current Date */}
                                <p>{currentDate()}</p>
                                {/* Dot */}
                                <span>.</span>
                                {/* Current Time */}
                                <p>{time}</p>
                            </div>
                        </div>
                        {/* User Button */}
                        <UserButton />
                    </>
                ) : (
                    <>
                        {/* Note */}
                        <p className='opacity-80'>Please sign up for using</p>
                        {/* Sign Up Button */}
                        <SignUpButton
                            mode='modal'
                            forceRedirectUrl={process.env.PUBLIC_URL}
                            className='py-2 px-4 rounded-md bg-[#6e0c8d] sm:hover:bg-[#6e0c8d]/50 transition'
                        />
                    </>
                )}
            </div>
        </div>
    );
});

export default Header;