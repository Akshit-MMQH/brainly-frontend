import { Button } from "../components/ui/Button"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/Shareicon"
import { Card } from "../components/ui/Card"
import { Sidebar } from "../components/ui/Sidebar"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { useState } from "react"
import { useContent } from "../hooks/useContent"

export function Dashboard () {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return <div className=" ml-72">
        <Sidebar />
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }}/> 
      <div className="flex justify-end gap-2 m-1">
        <Button onClick={() => {setModalOpen(true);}} startIcon={<PlusIcon size="md" />} varient="primary" size="sm" text="Add Content"/>
        <Button startIcon={<ShareIcon size="md" />} varient="secondary" size="sm" text="Share Content"/>
      </div>
      <div className="flex">
        <Card title="youtube" link="https://youtu.be/8eeDuiaq7eU?si=BqvJCE6dB2E9FmRr" type="youtube"/>
        {contents.map(({type, link, title}) => <Card type={type} link={link} title={title} />)}

    </div>
  </div>   
}

