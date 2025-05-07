import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard userName={"xx"}name={"Alvaro"} />
        <TwitterFollowCard userName={"midudev"}name={"MiduDev"} />
        </section>
    )
}