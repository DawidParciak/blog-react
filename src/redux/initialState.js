const initialState ={
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur feugiat dolor, at ornare lacus aliquam at. Aenean ultricies magna at velit vestibulum pretium. Aenean rhoncus erat eget dolor malesuada, id egestas neque efficitur. Nam eleifend eros iaculis ipsum sagittis, ac volutpat magna venenatis. Curabitur id rutrum nisl, vitae bibendum tortor. Nunc non arcu sapien. Donec commodo turpis at pretium ornare. Nam at sagittis nibh.',
      publishedDate: new Date('2023-02-03'),
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Nulla facilisi. Duis suscipit leo eget eros gravida gravida. Ut nisi eros, venenatis sed purus maximus, sodales facilisis neque. Praesent consequat ultrices justo. Etiam sit amet nibh urna. Sed purus velit, dapibus non consectetur non, dapibus et augue. Aliquam in ultrices lorem, nec blandit mauris. Quisque tortor nisl, consectetur non nisi in, vestibulum iaculis augue. Praesent aliquet efficitur enim, a luctus tortor tincidunt quis. Vestibulum hendrerit, erat volutpat posuere consequat, lacus diam dapibus ante, ac porttitor ex urna id enim. Proin condimentum est ac ipsum lacinia mattis. Vestibulum sed vehicula est.',
      publishedDate: new Date('2023-02-10'),
      author: 'John Trabolta',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Nulla diam ipsum, pellentesque ut sapien ac, malesuada tincidunt felis. Morbi sed congue est. Phasellus tincidunt ipsum felis, non eleifend dui sagittis vitae. Donec condimentum elementum bibendum. Curabitur elementum tristique ipsum tempor rhoncus. Aliquam id ante sit amet mauris tempor malesuada. Curabitur vitae nisi ut tellus suscipit porta. Nullam at suscipit metus. Vestibulum id eros orci. In diam neque, pharetra sed diam et, bibendum interdum velit. Donec viverra massa quam, ut pulvinar odio rutrum ut. Suspendisse potenti. Aenean leo libero, interdum in ornare sit amet, rutrum id lorem. Vestibulum sit amet laoreet metus, a porta ligula.',
      publishedDate: new Date('2023-02-22'),
      author: 'John Lemon',
      category: 'Sport',
    },
  ],

  categories: [
    'Sport',
    'News',
    'Movies',
    'Music',
  ]
};

export default initialState;
