import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - Particles Animated'

const ParticlesAnimatedPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/ParticlesAnimated" />
        </>
    )
}

export default ParticlesAnimatedPage