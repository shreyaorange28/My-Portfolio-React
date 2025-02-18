import { useState } from "react";
import "./Page2.css"
function Page2() {

  const [activeTab, setActiveTab] = useState("tab1")
  // tab 1 is activeTab by default

  const tabs = [
    {id: "tab1", label: "Home"},
    {id: "tab2", label: "About"},
    {id: "tab3", label: "Tab 3"},
    {id: "tab4", label: "Tab 4"},
    {id: "tab4", label: "FAQ"},
  ]

  const tabContent = {
    tab1: (
      <div>
        <h2 className="mb-3 text-2xl font-bold">Welcome</h2>
        <p>blaaaah blaah blaaaah blah blaaah blaah
        blaaaah blaah blaaaah blah blaaah blaah
        blaaaah blaah blaaaah blah blaaah blaah
        blaaaah blaah blaaaah blah blaaah blaah </p>
      </div>
    ),
    tab2: (
      <div>
        <h2 className="mb-3 text-2xl font-bold">About Me!</h2>
        <p>blaaaah blaah blaaaah blah blaaah blaah
        blaaaah blaah blaaaah blah blaaah blaah </p>
        <span className="border-l-4 border-purple-500 pl-4 italic">SPANNING INFORMATION ACROSS SOMETHING</span>
        <p>blaaaah blaah blaaaah blah blaaah blaah
        blaaaah blaah blaaaah blah blaaah blaah </p>
      </div>
    ),
    tab3: (
      <div>
      <h2 className="mb-3 text-2xl font-bold">Tab 3</h2>

      <p>blaaaah blaah blaaaah blah blaaah blaah
      blaaaah blaah blaaaah blah blaaah blaah </p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h1 className="fond-bold">Grid 1</h1>
          <p className="text-sm">blah blah blah</p>
        </div>

        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h1 className="fond-bold">Grid 2</h1>
          <p className="text-sm">blah blah blah</p>
        </div>

        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h1 className="fond-bold">Grid 3</h1>
          <p className="text-sm">blah blah blah</p>
        </div>

        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h1 className="fond-bold">Grid 4</h1>
          <p className="text-sm">blah blah blah</p>
        </div>
      </div>
    </div>
    ),
    tab4: (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Tab 4</h2>
      <p className="mb-4">blah blah blah</p>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full 
        rounded-xl border p-2 outline-none ring-2 ring-transparent 
        focus:ring-purple-400"/>
        <input type="text" placeholder="Email" className="w-full 
        rounded-xl border p-2 outline-none ring-2 ring-transparent 
        focus:ring-purple-400"/>
        <textarea name="" id ="" placeholder="Message" className="w-full 
        rounded-xl border p-2 outline-none ring-2 ring-transparent 
        focus:ring-purple-400"></textarea>
      </form>
      <button className="rounded-full bg-purple-500 px-4 py-2 text-white hover:bg-purple-500">Send</button>
    </div>
    ),
    tab5: (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        <h3 className="font-bold">Q: Blah blah blah blah blah?</h3>
        <p>A: kjsdflkajfkjafklsdjfklsdjfkl</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Q: Blah blah blah blah blah?</h3>
        <p>A: kjsdflkajfkjafklsdjfklsdjfkl</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Q: Blah blah blah blah blah?</h3>
        <p>A: kjsdflkajfkjafklsdjfklsdjfkl</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Q: Blah blah blah blah blah?</h3>
        <p>A: kjsdflkajfkjafklsdjfklsdjfkl</p>
      </div>
    </div>
    )
  }


  return (
    <>
      {/* purple gradient */}
      <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-200">

        {/* Code from Tailwind CSS setup
         <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        {/* sets up the main block */}
        <div className="max-w-[500px] rounded-3xl border bg-white p-8 mx-10 shadow-xl space-y-5">
          {/* div for tabs */}
          <div className="flex flex-wrap border-b">
            {tabs.map((tab) => (
              <button key={tab.id}
              className={'px-4 py-2 font-semibold ${activeTab == tab.id ? "border-b-2 border-purple-500 text-purple-500" : "text-grey-500 hover:text-purple-500"}'}
              onClick={() => setActiveTab(tab.id)}
              >
              {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content*/}
          <div>

            <div>{tabContent[activeTab]}</div>
          </div> 

        </div>
      </div>
    </>
  )
}

export default Page2;