import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/Shareicon"
import { Card } from "./components/ui/Card"
import { Sidebar } from "./components/ui/Sidebar"
import { CreateContentModal } from "./components/ui/CreateContentModal"

function App () {

  return <div className="">
            <CreateContentModal />
      <div className="flex justify-end gap-2 m-1">
        <Button startIcon={<PlusIcon size="md" />} varient="primary" size="sm" text="Add Content"/>
        <Button startIcon={<ShareIcon size="md" />} varient="secondary" size="sm" text="Add Content"/>
      </div>
      <div className="flex">
        <Card title="youtube" link="https://youtu.be/8eeDuiaq7eU?si=BqvJCE6dB2E9FmRr" typeLink="youtube"/>
        <Card title="twitter" link="https://x.com/salujamehak5/status/2013496301535797309?s=20" typeLink="youtube"/>
    </div>
  </div>   
}

export default App