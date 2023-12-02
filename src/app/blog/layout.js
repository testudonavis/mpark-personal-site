import SubPageLayout from '@/components/SubPageLayout';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function BlogLayout({ children }) {

  return (
    <SubPageLayout children={children} />
  )
}
