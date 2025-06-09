import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/workspace");
      }
    });
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleSignUp = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container relative overflow-hidden w-768 max-w-full min-h-480 rounded-lg shadow-lg">
        <div className={`form-container absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 ${isSignUp ? 'opacity-100 z-5' : 'opacity-0 z-1'}`}>
          <form className="bg-white flex flex-col items-center justify-center p-12 h-full text-center">
            <h1 className="font-bold m-0">Create Account</h1>
            <div className="social-container my-5">
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">FB</a>
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">G+</a>
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">LI</a>
            </div>
            <span className="text-xs">or use your email for registration</span>
            <input type="text" placeholder="Name" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="email" placeholder="Email" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="password" placeholder="Password" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <button onClick={handleSignUp} className="rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wider transition-transform duration-80 ease-in">Sign Up</button>
          </form>
        </div>
        <div className="form-container absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2">
          <form className="bg-white flex flex-col items-center justify-center p-12 h-full text-center">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="social-container my-5">
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">FB</a>
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">G+</a>
              <a href="#" className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10">LI</a>
            </div>
            <span className="text-xs">or use your account</span>
            <input type="email" placeholder="Email" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <input type="password" placeholder="Password" className="bg-gray-200 border-none p-3 my-2 w-full" />
            <a href="#" className="text-gray-700 text-sm no-underline my-4">Forgot your password?</a>
            <button onClick={handleSignIn} className="rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wider transition-transform duration-80 ease-in">Sign In</button>
          </form>
        </div>
        <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100">
          <div className={`overlay bg-gradient-to-r from-red-500 to-red-600 relative left-[-100%] h-full w-[200%] transform transition-transform duration-600 ease-in-out ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'}`}>
            <div className={`overlay-panel absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out ${isSignUp ? 'translate-x-0' : '-translate-x-1/5'}`}>
              <h1 className="font-bold m-0">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wider my-5">To keep connected with us please login with your personal info</p>
              <button className="ghost bg-transparent border border-white rounded-full text-white text-xs font-bold py-3 px-12 uppercase tracking-wider transition-transform duration-80 ease-in" onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className={`overlay-panel absolute flex flex-col items-center justify-center p-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out ${isSignUp ? 'translate-x-1/5' : 'translate-x-0'}`}>
              <h1 className="font-bold m-0">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wider my-5">Enter your personal details and start journey with us</p>
              <button className="ghost bg-transparent border border-white rounded-full text-white text-xs font-bold py-3 px-12 uppercase tracking-wider transition-transform duration-80 ease-in" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth; 