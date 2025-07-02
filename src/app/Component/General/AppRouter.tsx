'use client';

import { useRouter } from "next/router";



const AppRouter = ({link,children}: { link: string; children:any}) => {
  const route = useRouter();

  const handleClick = (path: string) => {
    route.push(path);
  };

  return <span onClick={() => handleClick(link)}>{children}</span>;
};


export default AppRouter;