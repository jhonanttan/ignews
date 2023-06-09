import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'


export function SigInButton() {

    const [session] = useSession();

    return session ? (
        <button 
            type="button" 
            className={styles.sigInButton}
            onClick={() => signOut()}
        >
        <FaGithub color='#04d361'/>
            {session.user.name}
        <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button" 
        className={styles.sigInButton}
        onClick={()=> signIn('github')}
        >
            <FaGithub color='#eba417'/>
            Sign in with Github
        </button>
    )
}