import RepoCard from "./RepoCard";

function RepoList() {
    return (
        <div className="rounded-xl border-2 border-[#222222] p-8">
            <main className="grid grid-cols-3 gap-8 px-20 pt-8">
            <RepoCard
                name="portfolio"
                description="My personal page built with React."
                language="JavaScript"
                commits={48}/>
            <RepoCard
                name="todo-api"
                description="A small REST API for a to-do list."
                language="Java"
                commits={31}/>
            <RepoCard
                name="dotfiles"
                description="My terminal and editor settings."
                language="Shell"
                commits={12}/>
            </main>
        </div>
    );
}
export default RepoList;