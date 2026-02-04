import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Card } from "../components/ui/Card";

export function SharedBrain() {
    const { sharelink } = useParams();
    const [content, setContent] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        axios.get(BACKEND_URL + `/api/v1/brain/${sharelink}`, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setContent(response.data.content);
            setUsername(response.data.username);
        })
    }, [sharelink]);

    return <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{username}'s Brain</h1>
        <div className="flex flex-wrap">
            {content?.map(({type, link, title}: any) => <Card type={type} link={link} title={title} />)}
        </div>
    </div>
}
