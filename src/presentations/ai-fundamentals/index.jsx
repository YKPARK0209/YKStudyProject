import meta from './meta.json'
import PresentationViewer from '../../components/PresentationViewer'
import Slide01 from './Slide01'
import Slide02 from './Slide02'
import Slide03 from './Slide03'
import Slide04 from './Slide04'
import Slide05 from './Slide05'
import Slide06 from './Slide06'
import Slide07 from './Slide07'
import Slide08 from './Slide08'

const slides = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08]

export default function AiFundamentals() {
  return <PresentationViewer slides={slides} title={meta.title} />
}
