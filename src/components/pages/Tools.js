import React from 'react'
import '../css/Tools.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Tools = () => {

    return (
        <>
            <OwlCarousel items={1}
                className="owl-theme"
                loop
                nav
            >
                <div className="container__tools">
                    <h1 >Discord</h1>
                    <button> <a href="https://discord.com/">Download</a></button>
                    <img src="/images/discord.svg" alt="discord" />
                    <div className="content__tools">

                        <p> Discord is a free proprietary VoIP and instant messaging software. It runs on Windows, macOS, Linux, Android, iOS and web browsers.
                            It allows you to communicate with several people at the same time thanks to a server system that you can join as well as voice and written chat.<br />
                            A typical server might have dedicated chat rooms for specific topics (such as “general chat” and “music discussion”) as well as voice channels for specific activities.
                            It’s also grown to support large video chats to keep up with the Zoom generation.<br/>
                            In summary, discord is a very powerful communication application for a variety of uses such as games or studies </p>
                            
                    </div>
                </div>
                <div className="container__tools">
                    <h1>Gimp</h1>
                    <button> <a href="https://www.gimp.org/">Gimp</a></button>
                    <img src="/images/gimp.svg" alt="discord" />
                    <div className="content__tools">

                        <p>GIMP (acronym for GNU Image Manipulation Program), formerly known as "The GIMP", is a free and open source image editing and retouching tool. There are versions for most operating systems including GNU/Linux, macOS and Microsoft Windows.<br/>
                        It has many capabilities. It can be used as a simple paint program, an expert quality photo retouching program, an online batch processing system, a mass production image renderer, an image format converter.<br/>
                        It can be used for :<br/>
                        Painting (Full suite of painting tools including, Sub-pixel sampling for all paint tools for high quality anti-aliasing...)<br/>
                        Animation (Load and save animations in a convenient frame-as-layer format)
                        and many other thing.
                        </p>
                    </div>

                </div>
                <div className="container__tools">
                    <h1>Teams</h1>
                    <button> <a href="https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software">Teams</a></button>
                    <img src="/images/Teams.svg" alt="discord" />
                    <div className="content__tools">

                        <p>Microsoft Teams is a customisable collaborative platform that integrates video conferencing, file storage and transfer with SharePoint, a note-taking block with OneNote. Instant messaging allows for team or workgroup exchanges while keeping track of all exchanges. Its integration with Microsoft Outlook allows you to plan team meetings and share emails and contacts. It is a Microsoft software available as a stand-alone product or as part of an Office 365 package.<br/>
                            Multi-factor authentication combined with data encryption ensures that teams can connect and work remotely in a secure space.
                            Finally, users can work together in co-editing mode on Word, PowerPoint, Excel, OneNote, or Outlook applications while remaining in the Teams application interface.
                            In addition, in Teams you can create several teams that can host several videoconference rooms.
                        </p>
                    </div>

                </div>
                <div className="container__tools">
                    <h1>Google Doc</h1>
                    <button> <a href="https://www.google.com/docs/about/">Google Doc</a></button>
                    <img src="/images/googledoc.svg" alt="discord" />
                    <div className="content__tools">

                        <p>Google Docs is a very powerful real-time collaboration and document authoring tool. Multiple users can edit a document at the same time, while seeing each others' changes instantaneously. Users can produce text documents, slide presentations, spreadsheets, drawings, and surveys. The formats used are compatible with Microsoft Office and Open Office, so you can switch between these programs as needed.
                            All interactions and files are contained in Google's Internet servers (the cloud), and are accessible from within a web browser window.<br/>
                            The purpose of this tutorial is to guide you through getting acquainted with Google Docs' features so that you can apply them to your professional environment.
                            </p>
                    </div>

                </div>
                <div className="container__tools">
                    <h1>Winrar</h1>
                    <button> <a href="https://www.win-rar.com/start.html?&L=10">Winrar</a></button>
                    <img src="/images/winrar.svg" alt="discord" />
                    <div className="content__tools">

                        <p>WinRAR is a proprietary data compression software developed by the Russian Eugene Roshal. It is free as a trial version but a full paid version exists.<br/>
                            It uses a proprietary compression algorithm by default, RAR, but it is also capable of compressing to ZIP format and extracting archives in 7z, bzip2, ACE, ARJ, CAB, gzip, ISO, JAR, LZH, TAR, UUE and Z formats.<br/>
                            This program also allows you to create self-extracting archives for Windows (no decompression software required).<br/>
                            WinRAR can also generate multi-file archives and encrypt the contents of archives up to AES-256 since version 5.10.
                        </p>
                    </div>

                </div>
                <div className="container__tools">
                    <h1>Trello</h1>
                    <button> <a href="https://trello.com/fr">Trello</a></button>
                    <img src="/images/trello.svg" alt="discord" />
                    <div className="content__tools">

                        <p>Trello is a collaboration tool that organizes your projects into charts. At a glance, Trello tells you what's in the works, who's working on what, and where something is in a process.<br/>
                            Imagine a whiteboard, filled with lists of sticky notes, each note a task for you and your team. Now imagine that each of those sticky notes has photos, attachments from other data sources like BitBucket or Salesforce, documents, and a place to comment and collaborate with your teammates.<br/>
                            Now imagine being able to take that whiteboard anywhere you go on your smartphone and access it from any computer via the web. That's Trello!
                        </p>
                    </div>

                </div>
                <div className="container__tools">
                    <h1>Office</h1>
                    <button> <a href="https://neuprodprv.www.office.com/">Office</a></button>
                    <img src="/images/office.svg" alt="discord" />
                    <div className="content__tools">

                        <p>Microsoft Office is an office suite owned by the Microsoft company that works with both fixed and mobile platforms. It is installed on a computer and provides a suite of software such as: Word, Excel, PowerPoint, OneNote, Outlook, Access and/or Publisher depending on the suite chosen.<br/>
                            Microsoft Office offers a web version that can be used directly online from a web browser. Office is also available for mobile devices: Windows Phone, iPhone, iPad, Android phones or tablets; it is then called Office Mobile, Office for iPad, Office for iPhone or Office for Android depending on the device used.
                        </p>
                    </div>

                </div>
            </OwlCarousel>
        </>
    )
}

export default Tools
