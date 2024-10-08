import test from 'ava';

import { honkaiImpact } from './setup';

test('record.characters() should return valid response', async (t) => {
  const client = await honkaiImpact();
  const res = await client.record.characters();

  res.forEach((char) => {
    t.deepEqual(Object.keys(char).sort(), ['character', 'is_chosen'].sort());
    t.is(typeof char.character, 'object');
    t.is(typeof char.is_chosen, 'boolean');

    t.deepEqual(
      Object.keys(char.character).sort(),
      ['avatar', 'weapon', 'stigmatas', 'costumes'].sort()
    );

    t.deepEqual(
      Object.keys(char.character.avatar).sort(),
      [
        'id',
        'name',
        'star',
        'avatar_background_path',
        'icon_path',
        'background_path',
        'large_background_path',
        'figure_path',
        'level',
        'oblique_avatar_background_path',
        'half_length_icon_path',
        'image_path',
        'wiki_url',
        'avatar_background_path_v2',
        'attribute_id',
        'attribute_background_path',
        'sec_part_icon',
      ].sort()
    );

    t.deepEqual(
      Object.keys(char.character.weapon).sort(),
      [
        'id',
        'name',
        'max_rarity',
        'rarity',
        'icon',
        'level',
        'wiki_url',
        'homology_level',
      ].sort()
    );

    char.character.stigmatas.forEach((stigmata) => {
      t.deepEqual(
        Object.keys(stigmata).sort(),
        [
          'id',
          'name',
          'max_rarity',
          'rarity',
          'icon',
          'level',
          'wiki_url',
        ].sort()
      );
    });
  });
});
