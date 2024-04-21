import React from 'react';

function Signin() {
  return (
    <header className='contents'>
        <div className='page clear flex justify-center'>
            <section className='w-3/5 z-10 min-w-96 h-4/5 bg-gradient-to-br from-blue-300 to-yellow-200 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-medium text-white z-10 mb-2'>Sign In</h1>
                {/* <img src={logo} className="absolute w-1/3 c-" alt="logo" /> */}
                <form className='w-3/4 grid grid-cols-1 text-white text-lg gap-1 z-10 mb-6'>
                <label value=''>Username</label>
                <input
                className='placeholder-white text-sm shadow rounded bg-transparent p-3 pl-2 mb-6'
                placeholder='Username'
                ></input>

                <label value=''>Password</label>
                <input
                className='placeholder-white text-sm shadow-md rounded bg-transparent p-3 pl-2 mb-6'
                placeholder='Password'
                ></input>

                <div>
                    <input className='' type="checkbox" id="vehicle3" name="check" value="Remember me"></input>
                    <label className='p-1 text-sm' for="check">Remember Me</label>
                </div>

                <button className='bg-white font-medium shadow-md rounded-md p-1 text-blue-500'>SIGN IN</button>
                </form>

                <p className='text-white text-lg'>Don't have an account? <a className='underline' href=''>Create account.</a></p>
            </section>
        </div>

    </header>
  );
}

export default Signin;