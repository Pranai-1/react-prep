
function useDebounce(func,delay){
    let debounceTimerId,count=0
    return function(...args){
        count++
        if(debounceTimerId)
        clearTimeout(debounceTimerId)
        debounceTimerId=setTimeout(()=>{
        func.apply(this,[...args,count])
   },delay)
    }
    
}

let debounce=useDebounce((...args)=>{
   const count = args.pop();
    const [setDebounceGun, setDebounceCount] = args;
       setDebounceGun(true);
    setDebounceCount(count);
},2000)

function useThrottle(func,delay){
    let lastArgs,throttled,count=0

    return function(...args){
        lastArgs=args
        count++
        if(!throttled){//ignored throttle call for the first time to avoid back to back calls.
            //back to back calls happens after the 2 seconds. throttle becomes true in timer and the immediate call will also gets 
            //executed because of that
             throttled=true
             lastArgs=null
           setTimeout(()=>{
            func.apply(this,[...args,count])
           throttled=false
        },delay)
        }
      
    }
}


let throttle=useThrottle((...args)=>{
     const count = args.pop();
    const [setThrottleGun, setThrottleCount] = args;
       setThrottleGun(true);
    setThrottleCount(count);
},2000)
export {debounce,throttle}

//Throttling types

//consider delay is 2 seconds
//If a function call happens we execute it directly for the first time and after that we set a timer,if the lastargs 
//is present then we execute the function otherwise we will not execute.
//There is a catch here,if the function  all happens exactly after the previous function call and no more function calls after that
//Do you want to call it or not,if yes then lastargs approach is correct or else go for timing(refer GFG)

//The catch is timing is that if we call a function multiple times before the delay then no event occurs