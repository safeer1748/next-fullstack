"use client"
import ContactForm from '@/components/contact-form'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Contact = () => {
  const { user } = useUser()
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);
  if (user) {
    return (
      <div className="pt-20">
        <ContactForm />
      </div>
    );
  }

};

export default Contact;
