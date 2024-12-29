import React from 'react';

interface SocialLoginProps {
  signUp?: boolean;
}

const SocialLogin = ({ signUp = false }: SocialLoginProps) => {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
      {signUp ? 'Sign up with Google' : 'Sign in with Google'}
    </button>
  );
};

export default SocialLogin;