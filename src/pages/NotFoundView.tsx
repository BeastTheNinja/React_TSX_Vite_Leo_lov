export const NotFoundView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-blue-800">404</h1>
            <p className="text-xl mt-4">Siden blev ikke fundet</p>
            <a href="/" className="mt-8 text-blue-800 underline">
                Gå tilbage til forsiden
            </a>
        </div>
    );
};