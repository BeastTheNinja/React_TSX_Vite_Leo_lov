import { Card } from "../Card/Card"

export const SectionCard = () => {
    return (
        <section className="relative -mt-70 rounded-lg grid grid-cols-4 justify-center gap-4 p-8 mx-8">
            <Card title="Title 1" description="Description 1" />
            <Card title="Title 2" description="Description 2" />
            <Card title="Title 3" description="Description 3" />
            <Card title="Title 4" description="Description 4" />
        </section>
    )
}