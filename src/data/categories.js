import React from 'react';
import { 
  Briefcase, Home, ShoppingCart, ShieldAlert, 
  Scale, Laptop, Users, GraduationCap 
} from 'lucide-react';

const categories = [
  {
    id: 'cat-employment',
    slug: 'employment',
    title: 'Employment & Labor',
    icon: <Briefcase />,
    description: 'Know your workplace rights — wages, termination, safety, harassment, and benefits under Indian labor laws.',
    color: '#2563EB',
    count: 10,
  },
  {
    id: 'cat-tenant',
    slug: 'tenant',
    title: 'Tenant & Housing',
    icon: <Home />,
    description: 'Understand your rights as a tenant — rent control, eviction protection, deposits, and maintenance obligations.',
    color: '#16A34A',
    count: 8,
  },
  {
    id: 'cat-consumer',
    slug: 'consumer',
    title: 'Consumer Protection',
    icon: <ShoppingCart />,
    description: 'Fight defective products, misleading ads, overcharging, and unfair trade practices through consumer courts.',
    color: '#EA580C',
    count: 8,
  },
  {
    id: 'cat-women-safety',
    slug: 'women-safety',
    title: "Women's Safety",
    icon: <ShieldAlert />,
    description: 'Laws protecting women from domestic violence, harassment, dowry, stalking, and ensuring equal rights.',
    color: '#DB2777',
    count: 10,
  },
  {
    id: 'cat-police',
    slug: 'police',
    title: 'Police & Criminal Rights',
    icon: <Scale />,
    description: 'Know your rights during arrest, FIR filing, bail, search and seizure, and interactions with police.',
    color: '#7C3AED',
    count: 10,
  },
  {
    id: 'cat-cyber-crime',
    slug: 'cyber-crime',
    title: 'Cyber Crime',
    icon: <Laptop />,
    description: 'Protection against online fraud, identity theft, cyberbullying, hacking, and digital privacy violations.',
    color: '#0891B2',
    count: 8,
  },
  {
    id: 'cat-family',
    slug: 'family',
    title: 'Family Law',
    icon: <Users />,
    description: 'Rights related to marriage, divorce, custody, maintenance, adoption, inheritance, and domestic disputes.',
    color: '#C026D3',
    count: 8,
  },
  {
    id: 'cat-student',
    slug: 'student',
    title: 'Student & Education',
    icon: <GraduationCap />,
    description: 'Rights for students — anti-ragging, fee refunds, RTE, exam fairness, hostel safety, and campus justice.',
    color: '#CA8A04',
    count: 8,
  },
];

export default categories;
