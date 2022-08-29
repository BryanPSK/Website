import React from 'react'
import { Card, Typography, Grid,Paper,CardContent, CardMedia, CardHeader } from '@mui/material'


const ProjectsCard = ({icon1,icon2,icon3,icon4,cardImg,content,subheader,title, video}) => {
  return (
    <Card sx={{width:350, height:350, overflow:'auto'}} variant='outlined' >
    <CardHeader 
        title={title}
        subheader={subheader}
        action={
            <>
            {icon1}
            {icon2}
            {icon3}
            {icon4}
            </>
        }/>
        {/* {video}? <CardMedia component="video" height="100" src={video} alt="display" /> : <CardMedia component="img" height="100" image={cardImg} alt="display" /> */}
        {/* <CardMedia component={{video}? 'video':'img'} height="100" src={{video}? {video}:{cardImg}} alt="display" /> */}
        <CardMedia component={ video? 'video':'img' } height="100" image={video? video :cardImg} alt="display" autoPlay loop/>
        <CardContent sx={{overflow:'auto', height:200}}>
            <Typography variant="body2" color="GrayText">{content}</Typography>
        </CardContent>
</Card>
  )
}

export default ProjectsCard