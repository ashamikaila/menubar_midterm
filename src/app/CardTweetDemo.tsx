'use client'

import { useState } from 'react'

import {
  BadgeCheckIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
  SendIcon,
  UserPlusIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { cn } from '../lib/utils'

const CardTweetDemo = () => {
  const [liked, setLiked] = useState<boolean>(true)

  return (
    <Card className='max-w-md'>
      <CardHeader className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Avatar className='ring-ring ring-2'>
            <AvatarImage src='/asha.png'alt='Matcha asha' />
            <AvatarFallback className='text-xs'>PG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>
              AshaMikaila <BadgeCheckIcon className='size-4 fill-sky-600 stroke-white dark:fill-sky-400' />
            </CardTitle>
            <CardDescription>@ashamikaila</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            <UserPlusIcon />
            Follow
          </Button>
          <Button variant='ghost' size='icon' aria-label='Toggle menu'>
            <EllipsisIcon className='size-4' />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        <img
          src='/matchagirly.webp'
          alt='Matcha Girly'
          className='aspect-video w-full rounded-md object-cover'
        />
        <p>
          I love Matcha Latte.{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #Matcha
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #MatchaGirly
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #🍵🍃
          </a>
        </p>
      </CardContent>
      <CardFooter className='flex items-center gap-1'>
        <Button variant='ghost' size='sm' onClick={() => setLiked(!liked)}>
          <HeartIcon className={cn('size-4', liked && 'fill-destructive stroke-destructive')} />
          2.1K
        </Button>
        <Button variant='ghost' size='sm'>
          <MessageCircleIcon className='size-4' />
          1.4K
        </Button>
        <Button variant='ghost' size='sm'>
          <RepeatIcon className='size-4' />
          669
        </Button>
        <Button variant='ghost' size='sm'>
          <SendIcon className='size-4' />
          1.1K
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardTweetDemo