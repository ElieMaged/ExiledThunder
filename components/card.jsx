import React from 'react';


export default function Card(props) {
  return (
    <div className="flex cardGroup">
     <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-initial w-72 h-150 m-6 flex flex-col justify-between text-center	">
    <a href="props.url">
    
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
    </a>
    <img className='thumbnail' src={props.image} alt="" />
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2">{props.body}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

    </div>
  );
};