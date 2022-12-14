import React, { useState } from "react";
import Link from "next/link";

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-2 ">
      <div className="flex gap-5 ">
        <button
          className="font-semibold text-lg text-red-500 hover:text-blue-500"
          type="button"
          onClick={() => setShowModal(true)}
        >
          ๐ข ์๋ํ์ธ์ ์์ ๊ฑฐ ์ถ์ฒ์๋น์ค CycleSC์๋๋ค!
        </button>
      </div>
      {showModal ? (
        <div className="mx-auto fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-75">
          <h2 className="text-base mt-72 mx-4 text-white font-semibold text-center">
            91812969 ์ ๋ณด๋ณดํธํ๊ณผ 18ํ๋ฒ ์ด์ง์ฑ
            <Link href={"https://portfolio-jinuk0316.vercel.app/"}>
              <a className="hover:text-blue-500">
                {" "}
                &quot;์ด์ง์ฑ_ํฌํธํด๋ฆฌ์ค&quot;
              </a>
            </Link>
            <br />
            91813286 ์ ๋ณด๋ณดํธํ๊ณผ 18ํ๋ฒ ํํ
            <Link href={"https://portfolio-hurhyeon.vercel.app/"}>
              <a className="hover:text-blue-500">
                {" "}
                &quot;ํํ_ํฌํธํด๋ฆฌ์ค&quot;
              </a>
            </Link>
            <br />
            91813298 ์ ๋ณด๋ณดํธํ๊ณผ 18ํ๋ฒ ํ์นํ
            <Link href={"https://portfolio-fawn-tau-77.vercel.app/"}>
              <a className="hover:text-blue-500">
                {" "}
                &quot;ํ์นํ_ํฌํธํด๋ฆฌ์ค&quot;
              </a>
            </Link>
            <br />
            91812074 ์ ๋ณด๋ณดํธํ๊ณผ 18ํ๋ฒ ๊ฐํ์ฑ
            <Link href={"https://pofol-c0mm4.vercel.app/"}>
              <a className="hover:text-blue-500">
                {" "}
                &quot;๊ฐํ์ฑ_ํฌํธํด๋ฆฌ์ค&quot;
              </a>
            </Link>
            <br />
            92015001 ์ ๋ณด๋ณดํธํ๊ณผ 20ํ๋ฒ ๊น๋ฏผ์ฐ
            <Link href={"https://portfolio-kmw-a8ea-kmw1122.vercel.app/"}>
              <a className="hover:text-blue-500">
                {" "}
                &quot;๊น๋ฏผ์ฐ_ํฌํธํด๋ฆฌ์ค&quot;
              </a>
            </Link>
            <br />
            <Link href={"https://youtu.be/H1qZ0wb6Ebk"}>
              <a className="text-red-500 hover:text-orange-500">์ ํฌ๋ธ</a>
            </Link>
            <br />
            <br />
            Copyright &copy; 2022 CycleSC_BicycleRecommendation
          </h2>
          <button
            className="mt-80 mx-auto w-1/2 px-8 h-10 bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow font-semibold absolute left-1/4"
            onClick={() => setShowModal(false)}
          >
            ๋ชจ๋ฌ์ฐฝ๋ซ๊ธฐ
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;