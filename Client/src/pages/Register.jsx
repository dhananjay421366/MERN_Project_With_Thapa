import React, { useState } from 'react'

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",

  });
  const [animate, setAnimate] = useState(true);

  // submit the values
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user)
    console.log(user);
  }

  return (
    <>
      <section>
        <main>
          <div className='md:flex justify-evenly m-7 md:m-0 items-center sm:my-16'>
          <div className={`img grid md:grid-cols-2 mb-4 sm:flex justify-center md:mb-0 `} >
          <img src="/images/register.png" className='md:w-[400px] md:h-[500px] w-52 h-52' alt="a girl is trying to do registration " />
        </div>
            {/*  let tackle registration form  */}
            <div className={`inline-block m-9 `}>
              <h1 className='mb-3 text-xl relative capitalize'>Registration form</h1>
              <br />
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder='username' id='username' required
                    autoComplete='off' className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95  text-black"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}

                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder='Enter your email' id='email' required
                    autoComplete='off' className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-black "
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}

                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" placeholder='Enter your phone' id='phone' required
                    autoComplete='off' className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-black"
                    value={user.phone}
                    onChange={(e) => setUser({
                      ...user, phone: e.target.value
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder='Enter your password' id='password' required
                    autoComplete='off' className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-black"
                    value={user.password}
                    onChange={(e) => setUser({
                      ...user, password: e.target.value
                    })}
                  />
                </div>
                <br />
                <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transform hover:scale-105 transition-transform duration-300">Register Now</button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
