import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { Container, Stack } from '@mui/material';
import { theme } from '../components/Theming';

function About() {
  return (
    <div className="App">
      <header className="App-header">

        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            Community Statement
          </Container>

          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, flexDirection: "row", textAlign: "left", fontSize: theme.typography.body1.fontSize, padding: 10 }}>
            &ensp;&ensp;&ensp;The community I find myself calling home is the video game development industry. This community made me who I am today.
            From the 20+ year veteran developers making the games I grew up on, to the newcomers bringing unbridled passion indie projects, I have you to thank for inspiring me.
            My dream has always been to join the big companies and their massive development teams, so I can pour my heart and soul into something that made me happy.
            The biggest dream of them all is to be a part of the team that revolutionizes what a game can truly be. To do my part in making the game development industry a better place.
            Whether I continue to join them in the future or go find my own team in this community is up in the air, but I know I will be a part of the game industry, as much as it is a part of me.
            My journey of growth in this space has been a long and challenging process, but for every hurdle I crossed, every project I started, every idea I implemented, I had the community to thank.
            Everyone in our community looks out for each other, whether it be responding to threads about coding questions, or reporting bugs in software, or even just posting a guide on how to accomplish a certain task.
            There is always someone there to help you out when you need it. And you can give back just as much as you got when it becomes your turn.
            The video game development community grows the best when we all work together to improve.
            In terms of reviewing, critquing, and challenging others, the video game development community has a lot of avenues. From commenting on published games, creating forums, starting discussion posts, or hosting game jam events, there are a lot of ways to participate.
            I participated in 5 distinct Code Day Game Jams. Some of those ideas and projects are even on this site. We challenge each other to do the best we can, and make the most of our skills.
            I even participated in a larger game jam at another school. Over the three weeks we had, my team was able to bring our vision to life, which I am still so proud of to this day.
            That project, PowerHouse, is one of the most complete projects I have ever made. That Game Jam event gave the passion, motivation, and pressure to put our skills to the test and make something extraordinary.
            As a community, we work with each other to become the best version of ourselves. Our goal is to make people happy. To have people enjoy their hobby.
            To me, though. Our most important goal is to inspire others. To bring out their passion, their love, their creativity, and help them spread their vision.
            Using what I have learned and what I have made at college, I will devote myself to bring my passion to life in my community, and make it stronger than ever.

          </Container>
        </Container>

        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            About Me
          </Container>

          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, flexDirection: "row", textAlign: "left", fontSize: theme.typography.h6.fontSize, padding: 10 }}>
            &ensp;&ensp;&ensp;My name is Aidan Davidson, and I am a 21 year old college student at UAT (University of Advancing Technology).
            I have been a Game Programmer for 8+ years, with experience in Unreal Engine, Unity, Java, React, C++, C#, SQL, and more.
            I have been playing video games since I was young, and the effort they put in inspired me to become a game developer myself.
            So far I have up dozens of projects under my belt, all in different engines, different styles, different purposes, and different languages.
            Each and every one has been a stepping stone to get me where I am today.
            My goal as a game developer is simple. I want to be the one to inspire other the way I was.
            I want to give back to the industry that made me who I am today.
          </Container>
        </Container>

        <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            LINKS
          </Container>

          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", flex: 10, fontSize: theme.typography.h6.fontSize, padding: 10 }}>
            <a href="https://www.linkedin.com/in/aidan-davidson-0877a21a1/" target="_blank" >
              LinkedIn
            </a>
            &ensp;&ensp;&ensp;&ensp;
            <a href="https://harleyposter.itch.io" target="_blank" >
              Itch.io
            </a>
            &ensp;&ensp;&ensp;&ensp;
            <a href="https://www.youtube.com/channel/UCsuseZMKy1GnPkU9Z3gEUIw" target="_blank" >
              Youtube
            </a>

          </Container>
        </Container>
      </header>
    </div>
  );
}

export default About;
