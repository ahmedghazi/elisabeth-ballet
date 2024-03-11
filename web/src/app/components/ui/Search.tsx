import React, {
  // ChangeEvent,
  // useCallback,
  useEffect,
  // useMemo,
  useState,
} from "react";
import { usePageContext } from "@/app/context/PageContext";
import { _localizeText } from "@/app/utils/utils";
import { usePathname } from "next/navigation";
import { publish } from "pubsub-js";
// import debounce from "lodash.debounce";

type Props = {};

const Search = (props: Props) => {
  const [term, setTerm] = useState<string>("");
  const { searchResult, setSearchResult } = usePageContext();
  const pathname = usePathname();

  // reset
  useEffect(() => {
    setTerm("");
    if (setSearchResult) {
      setSearchResult([]);
    }
  }, [pathname]);

  // useEffect(() => {
  //   console.log({ term });
  //   if (term.length === 0) {
  //     console.log(searchResult);
  //     if (setSearchResult) setSearchResult([]);
  //   }
  // }, [term, setSearchResult]);

  const _handleSearch = async () => {
    const body = { s: term };
    // console.log(body);
    // return;
    document.body.classList.add("is-fetching");
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      // console.log(data);
      if (setSearchResult) setSearchResult(data);
      document.body.classList.remove("is-fetching");
      publish("BURGER.CLOSE");
    } catch (error: any) {
      console.log(error);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    if (event.target.value) {
      setTerm(event.target?.value);
    } else {
      setTerm("");
      if (setSearchResult) setSearchResult([]);
    }
  };

  const _handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.length > 0) {
      _handleSearch();
    }
  };

  return (
    <form className='search' onSubmit={_handleSubmit}>
      <div className='flex justify-between'>
        <div>
          <input
            type='search'
            placeholder={_localizeText("search")}
            name='term'
            // onChange={changeHandler}
            onInput={changeHandler}
            value={term}
            className='flex-2'
          />
        </div>
        <input type='submit' value='OK' />
        {/* <div className='py-md bg-red'>term: {term}</div> */}
      </div>
    </form>
  );
};

export default Search;
