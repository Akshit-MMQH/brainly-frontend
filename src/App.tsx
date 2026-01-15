import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/Shareicon"

function App () {
  return <div>
    <Button startIcon={<PlusIcon size="md" />} varient="primary" size="sm" text="Add Content"/>
    <Button startIcon={<ShareIcon size="md" />} varient="secondary" size="sm" text="Add Content"/>
  </div>
}

export default App