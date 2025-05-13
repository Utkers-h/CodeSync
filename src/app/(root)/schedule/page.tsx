"use client"
import LoaderUI from '@/components/LoaderUI';
import { useUserRole } from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import React from 'react'
import InterviewScheduleUI from './InterviewScheduleUI';

function SchedulePage() {
  const router = useRouter();

  const {isInterviewer , isLoading} = useUserRole();

  if(isLoading) return <LoaderUI/>
  // if the user is not  an interviewer, redirect them to the home page
  if(!isInterviewer) return router.push('/');
  
  // if the user is an interviewer, show the schedule page
  return (
    <InterviewScheduleUI/>
  )
}

export default SchedulePage
