function validUserNames(usernames) {
  return usernames.filter((value) => {
      return value.length < 10;
  }) 
}

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
