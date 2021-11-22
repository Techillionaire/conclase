import BlogPreview from '../blogpreview/BlogPreview'
import ChatPreview from '../chatpreview/ChatPreview'
import Navbar from '../navbar/Navbar'
import ShopPreview from '../shoppreview/ShopPreview'

const Home = () => {
    return (
        <div>
            <Navbar />
            <ShopPreview />
            <BlogPreview />
            <ChatPreview />

        </div>
    )
}

export default Home
