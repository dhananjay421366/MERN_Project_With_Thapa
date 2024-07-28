import React from 'react'

export default function Register() {
  return (
    <>
      <section>
        <main>
          <div className='md:flex justify-center items-center sm:my-16'>
            <div className="img grid md:grid-cols-2 mb-4 md:mb-0">
              <img src="/images/register.png" className='md:w-[400px] md:h-[500px]  w-52 h-52' alt="a girl is trying to do registration " />
            </div>
            {/*  let tackle registration form  */}
            <div>
              <h1 className='mb-3 relative capitalize'>Registration form</h1>
              <br />
              <form action="">
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder='username' id='username' required
                    autoComplete='off'   class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95" />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder='Enter your email' id='email' required
                    autoComplete='off'   class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95" />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" placeholder='Enter your phone' id='phone' required
                    autoComplete='off'   class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95" />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder='Enter your password' id='password' required
                    autoComplete='off'   class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95" />
                </div>
                <br />
                <button type="submit"class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transform hover:scale-105 transition-transform duration-300">Register Now</button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
