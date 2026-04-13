
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-indigo-50 dark:bg-black sm:items-start">
          <form action="" className="flex justify-center">
              <input type="text" name={"name"} className="bg-white mr-2 rounded-md"/>
              <button className="p-1 text-white bg-indigo-500 rounded-md">Submit</button>
          </form>
      </main>
    </div>
  );
}
