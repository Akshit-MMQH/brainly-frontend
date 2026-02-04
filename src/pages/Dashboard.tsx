import { Button } from "../components/ui/Button"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/Shareicon"
import { Card } from "../components/ui/Card"
import { Sidebar } from "../components/ui/Sidebar"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { useState } from "react"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../../config"
import axios from "axios"

export function Dashboard () {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  async function sharelink() {
      const response = await axios.post(BACKEND_URL + '/api/v1/brain/share', {
        share: true
      },{
        headers: {
          "token": localStorage.getItem("token")
        }
      })
      const shareUrl = 'http://localhost:5173/share/'+`${response.data.hash}`;
      alert(shareUrl);
  }

  return <div className=" ml-72">
        <Sidebar />
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
          refresh();
        }}/> 
      <div className="flex justify-end gap-2 m-1">
        <Button onClick={() => {setModalOpen(true);}} startIcon={<PlusIcon size="md" />} varient="primary" size="sm" text="Add Content"/>
        <Button startIcon={<ShareIcon size="md" />} varient="secondary" size="sm" onClick={sharelink} text="Share Content"/>
      </div>
      <div className="flex flex-wrap">
        <Card title="youtube" link="https://youtu.be/8eeDuiaq7eU?si=BqvJCE6dB2E9FmRr" type="youtube"/>
        {contents?.map(({type, link, title}) => <Card type={type} link={link} title={title} />)}

    </div>
  </div>   
}

