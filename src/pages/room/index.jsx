import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting =async (element) =>{
        const appID = 811592780;
        const serverSecret = "e2abe0e312d2d3c387ffab84f991af23";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret, roomId, Date.now().toString(), "Enter Name");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:5173/room/${roomId}`,
                }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall,
                
            },
            showScreenSharingButton: true,
        })
    }

    return <div>
                <div ref={myMeeting} />
            </div>;
};

export default RoomPage;