import React from "react";

export default function Progressbar(){
    return(
        <div class="ml-8 mr-80 space-y-2">
                    <div class="flex justify-between mb-1">
                     <span class="text-base font-medium text-white-700 dark:text-white">Sprint Progress</span>
                     <span class="text-sm font-medium text-white-700 dark:text-white">45%</span>
                    </div>
                    <div class="w-full bg-black-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full w-96"  ></div>
                    </div>
                    <div>
                       <p>5/20</p> 
                    </div>
         </div>
    )
}