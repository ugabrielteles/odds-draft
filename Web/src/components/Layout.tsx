import Header from "./Header";

interface LayoutProps {

}

export default function Layout(props: LayoutProps){
    return (
        <div className="px-8 py-8">
            <Header></Header>
        </div>
    )
}