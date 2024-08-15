import { useState } from 'react';
import { Group, Radio, Space, Stack, Text } from '@mantine/core';
import classes from './SingleChoice.module.css';
import { Value } from '@/app/survey/components/generateQuestion';

export function SingleChoice(props: ChoiceProps) {
    const [value, setValue] = useState<string | null>(null);
    const data = props.choice;

    const cards = data.map(({ title, content }, index) => (
        <Radio.Card className={classes.root} radius="md" value={index.toString()} key={index}>
            <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator />
                <div>
                    <Text className={classes.label}>{title}</Text>
                    <Text className={classes.description}>{content}</Text>
                </div>
            </Group>
        </Radio.Card>
    ));

    return (
        <>
            <Radio.Group
              value={value}
              onChange={setValue}
              // label="Pick one option"
              // description="Choose an option"
            >
                <Stack pt="md" gap="xs">
                    {cards}
                </Stack>
            </Radio.Group>

            <Space h={40} />

            {/*<Text fz="xs" mt="md">*/}
            {/*    CurrentValue: {value || '–'}*/}
            {/*</Text>*/}
        </>
    );
}

export interface ChoiceProps {
    choice: Value[];
}
