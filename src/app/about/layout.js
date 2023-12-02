import SubPageLayout from '@/components/SubPageLayout';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function AboutLayout({ children }) {

  return (
    <SubPageLayout children={children} />
  )
}
