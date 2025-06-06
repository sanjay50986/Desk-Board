import { CalendarDays, FileCode, FunnelX, List, Plus, Search, SquareMenu } from 'lucide-react';
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lists from './lists/Lists';
import Board from './board/Board';
import Calender from './calender/Calender';
import CreateTask from './CreateTask';


const Task = () => {

  const [openCreateTask, setOpenCreateTask] = useState(false)

  return (

    <div className=' w-full '>
      <div className='p-4 px-4'>
        <h1 className='text-[18px] font-medium'>My tasks</h1>
        <h2 className='text-[12px] text-[#7f7f89] font-medium pt-1'>Manage and track your tasks effeciently</h2>
      </div>

      <Tabs className="mt-1.5 overflow-auto">
        <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
          <TabList className="flex w-max min-w-full text-[13px] font-medium border-b px-4 border-gray-200 cursor-pointer">
            {['List', 'Board', 'Calendar'].map((label) => (
              <Tab
                key={label}
                className="flex items-center gap-2 px-3.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
                onClick={() => setBorderTab(true)}
              >
                {{
                  List: <List size={16} />,
                  Board: <SquareMenu size={16} />,
                  Calendar: <CalendarDays size={16} />,
                  // Files: <FileCode size={18} />,
                }[label]}
                {label}
              </Tab>
            ))}
          </TabList>
        </div>

        <div className=' px-4 py-4'>
          <div className='flex sm:flex-row flex-col justify-between '>
            <div className='flex flex-row gap-3 '>
              <div className='flex sm:w-[17rem] w-full border gap-2  p-1.5 shadow-xs px-4 items-center border-gray-300  rounded-md outline-none text-[14px] '>
                <Search className='text-[#7f7f89]' size={18} />
                <input
                  className='outline-none text-gray-600  w-full'
                  placeholder='Search task'
                />
              </div>

              <button className='flex  text-[14px] font-medium items-center border px-4  p-1.5 rounded-md shadow-xs gap-2 cursor-pointer border-gray-300 '>
                <FunnelX size={18} />
                Filter
              </button>
            </div>

            <button onClick={() => setOpenCreateTask(true)} className='create-Btn  p-2 max-sm:mt-3 '>
              <Plus size={18} />
              Create task
            </button>
          </div>
        </div>

        <CreateTask
          closeCreateTask={() => setOpenCreateTask(false)}
          createTask={openCreateTask}
        />
        {/*-----Lists-----*/}
        <TabPanel>
          <Lists />
        </TabPanel>

        {/*-----Board-----*/}
        <TabPanel>
          <Board />
        </TabPanel>


        {/*-----Calender-----*/}
        <TabPanel>
          <Calender />
        </TabPanel>

      </Tabs>
    </div>
  )
}

export default Task
