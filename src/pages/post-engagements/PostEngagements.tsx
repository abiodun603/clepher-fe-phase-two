// ** Libs
import { cn } from '../../lib/utils';

// ** Icon
import { Link } from 'lucide-react';
import { BsFiletypeJson, BsPlugin } from "react-icons/bs";
import { TbBrandMessenger } from "react-icons/tb";
import { TbQrcode } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

// ** Components
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DataTable } from '../../view/capture-tools/post-management/table/data-table';
import { columns } from '../../view/capture-tools/post-management/table/columns';

const PostEngagements = () => {
  return (
    <>
      <Tabs defaultValue="post" className="w-full">   
        <div className="w-full grid grid-cols-5 gap-x-10 h-[70vh]">
          <div className=''>
            <div className='relative flex flex-col justify-center bg-white rounded-xl h-fit py-3 px-1'>
              {/* Tab Title  */}
              <h3 className="text-n500/50 text-sm px-6 font-bold mb-1">Capture Tools</h3>
              <TabsList className="flex flex-col items-start w-full h-fit bg-white">
                <TabsTrigger value="links" className='tab-trigger-text-layout'><Link size={16} /> <span>Links Library</span></TabsTrigger>
                <TabsTrigger value="json" className='tab-trigger-text-layout'><BsFiletypeJson size={16} /> <span>JSON Generator</span></TabsTrigger>
                <TabsTrigger value="checkbox" className='tab-trigger-text-layout'><BsPlugin size={16} /> <span>Checkbox Plugin</span></TabsTrigger>
                <TabsTrigger value="messenger" className='tab-trigger-text-layout'><TbQrcode size={20} /><span>Messenger Code</span></TabsTrigger>
                <TabsTrigger value="post" className='tab-trigger-text-layout'><MdOutlinePostAdd size={16} /> <span>Post Engagement</span></TabsTrigger>
                <TabsTrigger value="send" className='tab-trigger-text-layout'><TbBrandMessenger size={16} /> <span>Send To Messenger</span></TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className='col-span-4 bg-white'>
            <TabsContent value="links">
            </TabsContent>
            <TabsContent value="json">USER DOCUMENTS HERE.</TabsContent>
            <TabsContent value="checkbox">BANK DETAILS HERE.</TabsContent>
            <TabsContent value="messenger">LOAN VIEW HERE.</TabsContent>
            <TabsContent value="post">                  
              <DataTable columns={columns} data={[]} />
            </TabsContent>
            <TabsContent value="send">APP AND SYSTEM DETAILS HERE</TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  )
}

export default PostEngagements