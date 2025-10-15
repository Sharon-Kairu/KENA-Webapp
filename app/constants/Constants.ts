import { LayoutDashboard, Users, UserPlus, Upload, BookOpenText } from 'lucide-react';

export const links=[
    {id:1,
     url:'home',
     title:'Home'
    },
    {id:2,
     url:'courses',
     title:'Courses'
    },
    {id:3,
     url:'about',
     title:'About'
    },
    
    {id:4,
     url:'contact',
     title:'Contact Us'
    },
]

export const adminLinks = [
  {
    id: 1,
    url: 'admindash',
    title: 'Dashboard',
    icon: LayoutDashboard ,
  },
  {
    id: 2,
    url: 'students_list',
    title: 'All Students',
    icon: Users  ,
  },
  {
    id: 3,
    url: 'add_student',
    title: 'Add Student',
    icon: UserPlus ,
  },
  {
    id: 4,
    url: 'upload_content',
    title: 'Upload Content',
    icon: Upload
  },
  {
    id: 5,
    url: 'learning_materials',
    title: 'Notes & Books',
    icon: BookOpenText 
  },
];