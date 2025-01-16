import { FadeInFromBottom } from '@/components/FadeInFromBottom'
import React from 'react'

const Roadmap = () => {
    return (
        <div
            id='roadmap'
            className=' w-[100vw] h-[100vh] pt-[100px] px-[10px] text-white'
        >
            <FadeInFromBottom>
                <h1 className=' text-3xl uppercase font-extrabold mb-4'>Roadmap</h1>
                <div id="how-to-buy" className=" w-full px-2 mb-6">
                    <div className=" border-l border-l-blue-500 h-fit">
                        <div className=" flex items-center justify-start mb-4">
                            <div className=" mr-4 w-[60px] border-t border-blue-500"></div>
                            <h1 className="uppercase font-extrabold text-2xl">phase 1 (Foundations)</h1>
                        </div>

                        <div className=" mx-4 w-[90%] px-3 py-5 text-white bg-blue-600 rounded-md mb-6">
                            • Launch MEG Coin: Deploy the token on the SUI blockchain to kickstart the MEG ecosystem. <br/>
                            • Lock Liquidity: Ensure transparency and trust by locking liquidity for security and stability. <br />
                            • Develop the lore: Craft the story and universe around MEG Coin to build a rich and engaging narrative. <br />
                        </div>



                        <div className=" flex items-center justify-start mb-4">
                            <div className=" mr-4 w-[60px] border-t border-blue-500"></div>
                            <h1 className="uppercase font-extrabold text-2xl">phase 2 (Establishing presence)</h1>
                        </div>

                        <div className=" mx-4 w-[90%] px-3 py-5 text-white bg-blue-600 rounded-md mb-6">
                            • Launch Socials: Create official MEG Coin social media accounts to connect with the community and share updates. <br />
                            • Launch Website: Develop an engaging, user-friendly platform detailed information about MEG coin, the ecosystem and the roadmap. <br />
                        </div>

                        <div className=" flex items-center justify-start mb-4">
                            <div className=" mr-4 w-[60px] border-t border-blue-500"></div>
                            <h1 className="uppercase font-extrabold text-2xl">phase 3 (Expanding the ecosystem)</h1>
                        </div>

                        <div className=" mx-4 w-[90%] px-3 py-5 text-white bg-blue-600 rounded-md mb-6">
                            • Launch AI Agent: Introduce APEX, an AI-powered agent within the MEG ecosystem to bring utility, interaction and innovation to the SUI blockchain. <br />
                            • Launch MEG NFTs: Create and launch MEG NFTs featuring unique characters from the MEG universe, enhancing community engagement and expanding the MEG brand. <br />
                        </div>

                        <div className=" flex items-center justify-start mb-4">
                            <div className=" mr-4 w-[60px] border-t border-blue-500"></div>
                            <h1 className="uppercase font-extrabold text-2xl">phase 4 (growing the meg universe)</h1>
                        </div>

                        <div className=" mx-4 w-[90%] px-3 py-5 text-white bg-blue-600 rounded-md mb-6">
                            • Community Growth: Expand the MEG army by onboarding more users and building partnerships in the crypto and NFT user interface. <br />
                            • Ecosystem Evolution: Regularly update the roadmap with new features, collaborations and utilities as the MEG ecosystem grows. <br />
                            • Explore DeFi Integration: Leverage MEG Coin for staking, farming and liquidity pools to offer holders more value.
                        </div>
                    </div>
                </div>
            </FadeInFromBottom>
        </div>
    )
}

export default Roadmap