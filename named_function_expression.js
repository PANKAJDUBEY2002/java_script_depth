var factorial=function fac(n)
{
    if(n<2)
    return 1;
   else
   return n*fac(n-1);
}
facto=factorial;
factorial="something";
console.log(facto(3));