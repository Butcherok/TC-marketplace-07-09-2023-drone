import {
  Background,
  Item,
  List,
  Title,
  File,
  FileTitleBlock,
  FileTitle,
} from './UsefulInformation.styled';

const UsefulInformation = () => {
  return (
    <Background>
      <Title>Корисна інформація</Title>
      <List>
        <Item>
          <File>
            <FileTitleBlock>
              <FileTitle>Відео.mp4</FileTitle>
            </FileTitleBlock>
          </File>
        </Item>

        <Item>
          <File>
            <FileTitleBlock>
              <FileTitle>Інструкція.pdf</FileTitle>
            </FileTitleBlock>
          </File>
        </Item>

        <Item>
          <File>
            <FileTitleBlock>
              <FileTitle>Інструкція.pdf</FileTitle>
            </FileTitleBlock>
          </File>
        </Item>

        <Item>
          <File>
            <FileTitleBlock>
              <FileTitle>Інструкція.pdf</FileTitle>
            </FileTitleBlock>
          </File>
        </Item>
      </List>
    </Background>
  );
};

export default UsefulInformation;
