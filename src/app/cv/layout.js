import SubPageLayout from '@/components/SubPageLayout';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function CVLayout({ children }) {

  return (
    <SubPageLayout>{children}</SubPageLayout>
  )
}
