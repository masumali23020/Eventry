"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Header = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname();
  const {replace} =  useRouter();

  const handelSearch = (term)=> {
    const parms = new URLSearchParams(searchParams)

    if(term){
      parms.set('query', term)
    }else{
      parms.delete('querry')
    }
    replace(`${pathName}?${parms.toString()}`)
  }
 

    return (
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Discover Events</h1>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
            onChange={(e)=> {
              handelSearch(e.target.value)
            }}
            defaultValue={searchParams.get('query').toString()}
          />
        </div>
      </div>
    );
  };

  export default Header;
