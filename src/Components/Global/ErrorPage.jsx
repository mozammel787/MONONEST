import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ErrorPage = () => {
    const location = useLocation();
    const error = location.state?.error || { message: 'An unexpected error occurred', status: 500 };

    return (
        <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                        <span className="sr-only">Error</span>
                        {error.status || '500'}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">{error.message}</p>
                    <p className="mt-4 mb-8 text-gray-600">
                        It seems something went wrong. Please try again later or contact support if the problem persists.
                    </p>
                    <Link to="/" className="mt-6 btn btn-neutral">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
