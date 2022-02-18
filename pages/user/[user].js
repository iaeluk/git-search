import Image from "next/image";
import React from "react";

import Link from "next/link";

import { useRouter } from "next/router";

function User({ data, userRepos }) {
  console.log(userRepos);

  const router = useRouter();
  const { user } = router.query;

  const { login, avatar_url, name, location, bio } = data;

  return (
    <div className="bg-[#33312e] w-full min-h-screen  text-white space-y-2">
      <Link href="/" passHref>
        <button className="m-5 border-2 border-white py-3 px-5 rounded-md text-white hover:border-[#3e6ac4] hover:text-[#3e6ac4]">
          Home
        </button>
      </Link>

      <div className="flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col items-center justify-center">
          <div className="mb-2 mt-16">
            <Image
              className="rounded-full"
              src={avatar_url}
              alt='Avatar logo'
              width={230}
              height={230}
              layout="fixed"
            />
          </div>

          <div className="flex flex-col gap-2 items-center justify-centermb-10">
            <span className="text-center">
              {name} | {login} | {location}
            </span>
            <span className="text-center pb-10">{bio}</span>
          </div>

          <span className="font-bold text-xl text-left w-[90%] md:w-[80%] mb-3">
            Repositórios:
          </span>
          <div className="flex items-center justify-center gap-3 flex-wrap w-[90%] pb-10">
            {userRepos.map((repo) => {
              return (
                <a
                  key={repo.id}
                  target="_blank"
                  rel="noreferrer"
                  href={repo.html_url}
                  className="border p-1 hover:border-[#3e6ac4] hover:text-[#3e6ac4] cursor-pointer flex flex-col items-center justify-center w-full md:w-[300px]"
                >
                  <span className="text-center">{repo.name}</span>
                  <span>
                    Criado em {repo.created_at.split("T")[0].split("-")[2]}-
                    {repo.created_at.split("T")[0].split("-")[1]}-
                    {repo.created_at.split("T")[0].split("-")[0]}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {!data.login &&(
      <>
      <h1>Usuário <span className='font-bold'>{user}</span> não encontrado!</h1>
      <Link href="/" passHref>
        <button className="m-5 border-2 border-white py-3 px-5 rounded-md text-white hover:border-[#3e6ac4] hover:text-[#3e6ac4]">
          Home
        </button>
      </Link>
      </>)}
    </div>
  );
}

export default User;

export async function getServerSideProps({ params }) {
  const user = await fetch(`https://api.github.com/users/${params.user}`);
  const data = await user.json();

  const repos = await fetch(data.repos_url);
  const userRepos = await repos.json();

  return {
    props: {
      data,
      userRepos,
    },
  };
}
